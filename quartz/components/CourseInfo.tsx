import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const CourseInfo: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <div class="course-info">
      <h3>Course Info</h3>
      <p>
        VM300-03
        <br />
        <a href="https://emerson.edu/academics/academic-departments/visual-media-arts">
          Department of Visual &amp; Media Arts
        </a>
        <br />
        <a href="https://emerson.edu/">Emerson College</a>
        <br />
        Spring Semester 2026
        <br />
        Wed 14 Jan–Wed 29 April 2026
        <br />
        14:00–17:45
        <br />
        <a href="http://mroberts1.github.io/">Dr. Martin Roberts</a>
        <br />
        Office Hour: TBA
        <br />
        <a href="https://www.youtube.com/playlist?list=PL3uFXkpHLYM6EmE6yxN-NcYVFqoOnPGzR">
          YouTube playlist
        </a>
        <br />
        <a href="https://youtube.com/playlist?list=PL3uFXkpHLYM4Y01MlQrbOY8c59AW3t5Gb&si=q3qC80RAbX03pjx7">
          YouTube playlist – student
        </a>
      </p>
      <p>
        <a href="mailto:martin_roberts@emerson.edu">✉️</a>{" "}
        <a href="https://merveilles.town/@dokoissho">🐘</a>{" "}
        <a href="https://github.com/mroberts1/">GitHub</a>{" "}
        <a href="https://twitter.com/mroberts_vma">Twitter</a>
      </p>
    </div>
  )
}

CourseInfo.css = `
.course-info {
  font-size: 0.9rem;
}
.course-info h3 {
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.course-info p {
  line-height: 1.8rem;
  margin-bottom: 0.75rem;
}
.course-info a {
  background-color: transparent;
  padding: 0;
  border-radius: 0;
}
`

export default (() => CourseInfo) satisfies QuartzComponentConstructor
