import Section from './Section'

export default function EducationSection({ education }) {
  return (
    <Section title="Education">
      <ul>
        {education.institutions.map(institution => (
          <li key={institution.key} className="py-1">
            <h3 className="font-bold text-sm">{institution.name}</h3>

            <ul>
              {institution.courses.map(course => (
                <li key={course.key}>
                  <h4 className="py-1 flex flex-wrap justify-between gap-x-3 items-center text-neutral-700 italic border-b">
                    <span className="text-sm">{course.name} · {course.type}</span>
                    <span className="text-neutral-500 text-xs text-end">{course.period.start} - {course.period.end}</span>
                  </h4>
                </li>
              ))}
            </ul>

            <ul className="py-0.5">
              {institution.achievements.map(achievement => (
                <li key={achievement.key} className="py-0.5 text-xs">{achievement.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
