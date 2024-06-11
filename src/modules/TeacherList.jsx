import Card from './Card'
import data from '../chickenTab.json'
import './TeacherList.modules.css'

const TeacherList = () => {
  return (
    <section className="container flex-column flex-center teacher">
      <h2 className="teacher__title">Equipe pédagogique</h2>
      <div className="teacher__flex">
        {data.chickenTab
          .filter(chicken => chicken.position === 'Teacher')
          .map(chicken => {
            return (
              <Card
                key={chicken.id}
                name={chicken.name}
                imageLink={chicken.imgSrc}
                position={chicken.position}
                text={chicken.biography}
              />
            )
          })}
      </div>
    </section>
  )
}

export default TeacherList
