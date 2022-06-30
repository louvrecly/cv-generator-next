import { useUserContext } from 'context/user'
import { useReferencesContext } from 'context/references'
import { useSkillsContext } from 'context/skills'
import { useEducationContext } from 'context/education'
import { useWorkExperienceContext } from 'context/workExperience'
import { useProjectsContext } from 'context/projects'
import UserInfoBar from 'components/UserInfoBar'
import ReferencesSection from 'components/ReferencesSection'
import SkillsSection from 'components/SkillsSection'
import EducationSection from 'components/EducationSection'
import WorkExperienceSection from 'components/WorkExperienceSection'
import ProjectsSection from 'components/ProjectsSection'

export default function Home() {
  const [user, setUser] = useUserContext()
  const [references, setReferences] = useReferencesContext()
  const [skills, setSkills] = useSkillsContext()
  const [education, setEducation] = useEducationContext()
  const [workExperience, setWorkExperience] = useWorkExperienceContext()
  const [projects, setProjects] = useProjectsContext()

  return (
    <div className="mx-8 py-8 h-full md:h-[1485px] md:flex md:flex-col md:overflow-hidden">
      <UserInfoBar user={user} setUser={setUser} />

      <div className="md:flex-1 md:flex md:flex-col md:flex-wrap md:gap-x-3 md:overflow-scroll">
        <ReferencesSection references={references} setReferences={setReferences} />

        <SkillsSection skills={skills} setSkills={setSkills} />

        <EducationSection education={education} setEducation={setEducation} />

        <WorkExperienceSection workExperience={workExperience} setWorkExperience={setWorkExperience} />

        <ProjectsSection projects={projects} setProjects={setProjects} />
      </div>
    </div>
  )
}
