import { forEach } from '@angular/router/src/utils/collection';

export class RouteCalculation { 
  
    // No. of cities 
    public v: number;
  
    // adjacency list 
    public adjList: Map<string, Array<string>> = new Map<string, string[]>(); 

    //Result
    public result: Array<Array<string>> = new Array<Array<string>>();
  
    constructor(vertices: number) 
    { 
        // initialise vertex count 
        this.v = vertices; 
  
        // initialise adjacency list 
        this.initAdjList(); 
    } 
  
    // utility method to initialise 
    // adjacency list 
    public initAdjList() 

    { 
        var locations: Array<string> = ['Stockholm', 'Gothenburg', 'Ft. Lauderdale', 'Orlando', 'Savannah', 'Rotterdam']
  
        for (var location of locations) { 
            this.adjList.set(location, [])
        }

    } 
  
    // add route from u to v 
    public addRoute(u: string, v: string) 
    { 
        //sets up a map with all the possible connections
        let map = this.adjList;
        let connectionArray = map.get(u);
        connectionArray.push(v)
        map.set(u, connectionArray);
    } 
  
    // Returns all paths from "s" to "d"
    public calculateAllRoutes(s: string, d: string) 
    { 
        let isVisited: Map<string, boolean> = new Map<string, boolean>(); 
        let pathList: Array<string> = new Array<string>(); 
  
        // add source to path[] 
        pathList.push(s); 
  
        // Call recursive utility 
        this.calculateAllRoutesUtil(s, d, isVisited, pathList); 
        // console.log(pathList);

        return this.result;

    } 
  
    // A recursive function to return 
    // all paths from 'u' to 'd'. 
    // isVisited<> keeps track of 
    // cities in current path. 
    // localPathList<> stores actual 
    // cities in the current path 
    public calculateAllRoutesUtil(u: string, d: string, 
                                    isVisited: Map<string, boolean>, 
                                    localPathList: Array<string> ) 
    { 
        // If reached final destination, copy over the city sequence to the results array
        if (u == d) { 
            let routeOption: Array<string> = new Array<string>();
            for (var i = 0; i < localPathList.length; i++) {
                routeOption.push(localPathList[i]);
            }

            this.result.push(routeOption);
            // if match found then no need to traverse more
            return; 
        } 
  
        // Mark the current city as visited 
        isVisited.set(u, true);
  
        // Recur for all the cities 
        // adjacent to current city 
        for (let i of this.adjList.get(u)) { 
            if (!isVisited.get(i)) { 
                // store current city 
                // in path[] 
                localPathList.push(i); 
                this.calculateAllRoutesUtil(i, d, isVisited, localPathList); 
  
                // remove current city 
                // in path[] 
                var index = localPathList.indexOf(i);
                localPathList.splice(index); 
            } 
        } 
  
        // Mark the current city 
        isVisited.set(u, false); 
        return;
    } 

    public printResult() { 
        return this.result;
    }
} 