import Card from './Card'
import data from '../chickenTab.json'
import './StudentList.modules.css'

const StudentList = () => {
  return (
    <section className="container flex-column flex-center student">
      <h2 className="student__title">Camarades</h2>
      <div className="student__grid">
        {data.chickenTab
          .filter(chicken => chicken.position !== 'Teacher')
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

export default StudentList
