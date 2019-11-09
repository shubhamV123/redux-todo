import * as actions from './index';

describe('Todo Actions', () => {
    it("addTodo should create ADD_TODO action", () => {
        expect(actions.addTodo("Use Redux")).toEqual({
            type: "ADD_TODO",
            id: 0,
            text: "Use Redux"
        })
    })
})