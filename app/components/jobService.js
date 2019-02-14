import Job from "../models/job.js";

//private
let _state = {
  jobs: [
    new Job({ title: 'Fry Cook', wage: 15, img: 'assets/krustyKrab.jpeg', description: 'Expertly cook up and kraft delicious Krabby Patties for Bakini Bottom!' }),
    new Job({ title: 'Astronaut', wage: 100, img: 'assets/nasa.png', description: 'Float away from your problems in space and make lots of money!' }),
    new Job({ title: 'Barista', wage: 12, img: 'assets/starbucks.png', description: 'Brew coffee and learn mixology for the masses! Perks - all you can drink coffee!' })
  ]
}

let _subscribers = {
  jobs: []
}

function setState(dataName, value) {
  _state[dataName] = value
  //FOR EACH FUNCTION IN THE SUBSCRIBERS ENVOKE THE FUNCTION
  _subscribers[dataName].forEach(fn => fn());
}



//public
export default class JobService {
  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }

  get Jobs() {
    return _state.jobs
  }

  addJob(rawJob) {
    let newJob = new Job(rawJob)
    _state.jobs.push(newJob)
    setState('jobs', _state.jobs)
  }

  deleteJob(id) {
    for (let i = 0; i < _state.jobs.length; i++) {
      let job = _state.jobs[i]
      if (job.id == id) {
        _state.jobs.splice(i, 1)
        break;
      }
    }
    setState('jobs', _state.jobs)
  }

}