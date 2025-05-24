import './experience.css';
import experiences from '../../data/experience';

const Experience = () => {
  return (
    <>
      <div className="container ex-con" id='experience'>
        <h2 className='text-center'>EXPERIENCE</h2>
        {
          experiences.map((data) => (
            <div key={data.id} className='ex-item text-center my-5' data-aos='zoom-in' data-aos-duration='700'>
              <div className="left">
                <img src={data.imageSrc} alt="" />
              </div>
              <div className="right">
                <h2>{data.role}</h2>
                <h4>
                  <span className='date'> {data.startDate} :- {data.endDate},  </span>
                  <span className='location'>{data.location}</span>
                </h4>
                {
                  data.experiences.map((ex) => (
                    <h5 className='location' key={ex}>{ex}</h5>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Experience