import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
   "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2VmMDgwZDhjN2U1OWJhZTgyNGUxNTY4YmM3ZjUxYiIsInN1YiI6IjYwZjEzMjliYTliOWE0MDA3ZmExNDM1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bctrP16nhnGX6KFojO5SSIcdlgAANYZCNS78DeawArE" 
  }
});