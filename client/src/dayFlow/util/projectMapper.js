export default (event, projects) => {
  let project
  if (event.projectId) {
    project = projects.find(p => p.id === event.projectId)
  }
  return {...event, project}
}
