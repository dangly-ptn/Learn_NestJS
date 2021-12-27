import addJestHbsExtension from 'jest-hbs-extension'
import { resolve } from 'path'

const VIEW_PATH = resolve(__dirname, '..', 'views')

addJestHbsExtension(VIEW_PATH);
