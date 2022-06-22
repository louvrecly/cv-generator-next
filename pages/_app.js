import { UserProvider } from 'context/user'
import { ReferencesProvider } from 'context/references'
import { SkillsProvider } from 'context/skills'
import { WorkExperienceProvider } from 'context/workExperience'
import { EducationProvider } from 'context/education'
import DefaultLayout from 'components/layouts/default'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ReferencesProvider>
        <SkillsProvider>
          <WorkExperienceProvider>
            <EducationProvider>
              <DefaultLayout>
                <Component {...pageProps} />
              </DefaultLayout>
            </EducationProvider>
          </WorkExperienceProvider>
        </SkillsProvider>
      </ReferencesProvider>
    </UserProvider>
  )
}

export default MyApp
