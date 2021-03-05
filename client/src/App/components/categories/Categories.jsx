import React, {useState, Fragment} from 'react'
import categoryImg from '../../../assets/img/category.svg'
import clearImg from '../../../assets/img/clear.svg'

const Categories = ({categoriesById = []}) => {
  const [active, setActive] = useState(null)
  const handleActive = id => setActive(id)
  const handleClear = () => setActive(null)

  return (
    <div className='categories-wrapper'>
      {categoriesById.length > 0 ?
        <Fragment>
          <span>Filter by</span>
          <ul className='categories-list'>
            {categoriesById.length > 0 && <li
              className={active === null ? 'active' : ''}
              onClick={() =>
                handleActive(null)}>
              <span><img src={categoryImg} alt="category icon"/></span>all</li>
            }
            {categoriesById.map(el => <li
              key={el.id}
              className={active === el.id ? 'active' : ''}
              onClick={() => handleActive(el.id)}>
              <span><img src={categoryImg} alt="category icon"/></span>
              {el.name}
            </li>)}
          </ul>
          {categoriesById.length > 0 && <span
            onClick={handleClear}
          ><img src={clearImg} alt="clear"/> clear</span>}
        </Fragment>
        : ''}
    </div>
  )
}

export default Categories
