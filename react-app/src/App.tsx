import { useState } from 'react';
import NameButton from './components/NameButton';

function App() {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: 'John',
        },
    });

    const handleClick = (newName: string) => {
        setGame({ ...game, player: { ...game.player, name: newName } });
    };
    return (
        <div>
            <NameButton
                name={game.player.name}
                changeName={handleClick}></NameButton>
        </div>
    );
}

export default App;
