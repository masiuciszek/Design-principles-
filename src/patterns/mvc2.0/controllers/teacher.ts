import { ListView } from "../views/list-view"
import { loadTeachers } from "../models/teacher"

export class TeacherController {
  parentElement: HTMLDivElement
  teachersView: ListView
  constructor(parentElement: HTMLDivElement) {
    this.parentElement = parentElement
    this.teachersView = new ListView(this.parentElement, loadTeachers(), "Teachers", [
      "name",
      "email",
      "age",
    ])
  }

  init(): void {
    this.teachersView.init()
  }
}