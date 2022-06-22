import { useUserContext } from 'context/user'
import { useReferencesContext } from 'context/references'
import { useSkillsContext } from 'context/skills'
import { useWorkExperienceContext } from 'context/workExperience'
import { useEducationContext } from 'context/education'
import UserInfoBar from 'components/UserInfoBar'
import ReferencesSection from 'components/ReferencesSection'
import SkillsSection from 'components/SkillsSection'
import WorkExperienceSection from 'components/WorkExperienceSection'
import EducationSection from 'components/EducationSection'

export default function Home() {
  const [user, setUser] = useUserContext()
  const [references, setReferences] = useReferencesContext()
  const [skills, setSkills] = useSkillsContext()
  const [workExperience, setWorkExperience] = useWorkExperienceContext()
  const [education, setEducation] = useEducationContext()

  return (
    <div className="mx-8 py-8 h-full md:h-[1485px] md:flex md:flex-col md:overflow-hidden">
      <UserInfoBar user={user} setUser={setUser} />

      <div className="md:flex-1 md:flex md:flex-col md:flex-wrap md:gap-x-3 md:overflow-scroll">
        <ReferencesSection references={references} setReferences={setReferences} />

        <SkillsSection skills={skills} setSkills={setSkills} />

        <WorkExperienceSection workExperience={workExperience} setWorkExperience={setWorkExperience} />

        <EducationSection education={education} setEducation={setEducation} />
      </div>
    </div>
  )
}
