
import { TextureLoader } from 'three'

import {
    dirtImg,
    grassImg,
    glassImg,
    woodImg,
    logImg,
} from './images'

const dirtTexture = new TextureLoader(dirtImg);
const grassTexture = new TextureLoader(grassImg);
const glassImg = new TextureLoader(glassImg);
const woodImg = new TextureLoader(woodImg);
const logTexture = new TextureLoader(logImg);
const groundTexture = new TextureLoader(grassImg);

export {
    dirtTexture,
    grassTexture,
    glassImg,
    woodImg,
    logTexture,
    groundTexture,
}


