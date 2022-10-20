import styles from '../styles/Header.module.css'

const Header = () => {
  const random = Math.random()
  return (
    <div>
        <h1 className='title'>
            <span>My First Next</span>
        </h1>
        <style jsx>
            {`
                .title {
                    color: ${random > .5 ? 'magenta' : 'blue'}
                }
            `}
        </style>
    </div>
  )
}

export default Header