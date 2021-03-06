let id = 1
export default class Job {
  constructor(data) {
    this.id = id
    this.wage = data.wage
    this.title = data.title
    this.img = data.img
    this.description = data.description || 'No Description Provided'
    id++
  }

  getTemplate() {
    return `
        <div class="card col-3">
            <img class="card-img-top" src="${this.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.description} -- $${this.wage}hr</p>
                <button onclick="app.controllers.jobController.deleteJob(${this.id})">Remove</button>
            </div>
        </div>`
  }
}