import { useSeo } from '../lib/seo.js'
import Page from '../components/Page.jsx'
import Button from '../components/Button.jsx'

export default function NotFound() {
  useSeo({ title: 'Page not found', path: '/404' })
  return (
    <Page>
      <p className="label">Error 404</p>
      <h1 className="mt-4 text-[clamp(2rem,5vw,3rem)] font-bold">That page does not exist</h1>
      <p className="mt-4 max-w-[52ch] text-ink-muted">The link is dead or the project has been renamed. The project list is the best place to restart.</p>
      <div className="mt-8 flex gap-3">
        <Button to="/projects" variant="primary" icon="folderGit">View projects</Button>
        <Button to="/" icon="home">Home</Button>
      </div>
    </Page>
  )
}
