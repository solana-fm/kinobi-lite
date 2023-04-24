import { createFromIdls, isRootNode } from '../src';
import { phoenixIdl } from './phoenix';


describe("Test Kinobi Root Node creation", () => {
  test("Creating root node", async () => {
  const kinobi = createFromIdls([phoenixIdl])
  const rootNode = kinobi.getRoot();
  expect(isRootNode(rootNode)).toBeTruthy()
  })
})