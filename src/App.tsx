import { useEffect } from 'react'
import * as C from './App.styles'
import { Character } from './components/Character'
import { useCharacter } from './hooks/useCharacter'

export function App() {
  const char = useCharacter('JoacirSCN')

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [])

  function handleKeyDown(e: KeyboardEvent) {
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft()
        break

      case 'KeyW':
      case 'ArrowUp':
        char.moveUp()
        break

      case 'KeyD':
      case 'ArrowRight':
        char.moveRight()
        break

      case 'KeyS':
      case 'ArrowDown':
        char.moveDown()
        break
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} name={char.name} />
      </C.Map>
    </C.Container>
  )
}
