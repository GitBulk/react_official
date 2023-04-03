import { useState } from "react"

function MyButton() {
  return (
    <button>I am a button</button>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there <br />How do you do ?</p>
    </>
  )
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 }
]

function ShoppingList() {
  const listItems = products.map(p =>
    <li key={p.id} style={{ color: p.isFruit ? 'magenta' : 'darkgreen'}}>
      {p.title}
    </li>
  )

  return (
    <ul>{listItems}</ul>
  )
}

function ClickableButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick}>
      Click {count} times
    </button>
  )
}

function ShareStateButton({count, onClick}) {
  return (
    <button onClick={onClick}>
      Click {count} times
    </button>
  )
}

export default function MyApp() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <ShoppingList />
      <h1>ClickableButton</h1>
      <ClickableButton />
      <ClickableButton />
      <h1>ShareStateButton</h1>
      <ShareStateButton count={count} onClick={handleClick} />
      <br />
      <ShareStateButton count={count} onClick={handleClick} />
    </div>
  )
}
