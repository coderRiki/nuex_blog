export interface Label {
  id: string,
  color: string,
  name: string
}
export interface Blog {
  id: number,
  title: string,
  body: string,
  comments: number,
  labels: Array<Label>,
  created_at: string
}