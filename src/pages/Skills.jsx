import { useSeo } from '../lib/seo.js'
import Page from '../components/Page.jsx'
import SectionHead from '../components/SectionHead.jsx'
import SkillsGrid from '../components/SkillsGrid.jsx'

export default function Skills() {
  useSeo({
    title: 'Skills',
    path: '/skills',
    description: 'Python, SQL, Pandas, Scikit-learn, XGBoost, LightGBM, CatBoost, SHAP, Power BI, FastAPI, Docker.',
  })
  return (
    <Page>
      <SectionHead label="Skills" title="The toolkit" lead="Grouped by what they are for rather than ranked by an invented percentage." />
      <SkillsGrid />
    </Page>
  )
}
