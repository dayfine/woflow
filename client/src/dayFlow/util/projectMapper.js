export default (event, projects) => {
  if (event.projectId) {
    event.project = projects.find(p => p.id === event.projectId)
  }
  return event
}
