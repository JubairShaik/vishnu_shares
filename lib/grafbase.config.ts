import { g, auth, config } from '@grafbase/sdk'

const User = g.model("User",{
  name : g.string().length( {min:2 ,max:20}),
  email: g.string().unique(),
  branch: g.string(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githuburl: g.url().optional(),
  linkdinUrl: g.url().optional(),
  projects: g.relation(()=> Project).list().optional()

})

const Project = g.model("Project",{
  title: g.string().length({min:3}),
  description:s.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.string(),
  category: g.string().search(), //allows to search Through the category
  createdBy: g.relation(()=> User)
})

export default config({
  schema: g
 
})
