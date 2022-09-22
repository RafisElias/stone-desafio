import Home from './routes/Home.html';
import ConsultedCharacters from './routes/ConsultedCharacters.html';
import CharacterInfo from './routes/CharacterInfo.html';

export default {
  '/': Home,
  '/consulted-characters': ConsultedCharacters,
  '/characters-info/:id': {
    component: CharacterInfo,
  },
};
