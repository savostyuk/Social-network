import profileReducer, {addPostAC, deletePostAC} from "../redux/profileReducer";
let state = {
    posts: [
        {id: 1, message: 'Это моя страница', likesCount: 12},
        {id: 2, message: 'Сегодня 23 января 2021 года', likesCount: 123},
        {id: 3, message: 'Пост ни о чем', likesCount: 5},
        {id: 4, message: 'Оно как бы работает но надо тестить', likesCount: 222},
    ],
}

it('length of posts should be incremented', () =>{
    //1.test data
    let action = addPostAC('it-academy.by');

    //2.action
    let newState = profileReducer(state,action);

    //3.expectation
    expect(newState.posts.length).toBe(5);
})
it('message of new post should be correct', () =>{
    //1.test data
    let action = addPostAC('it-academy.by');

    //2.action
    let newState = profileReducer(state,action);

    //3.expectation
    expect(newState.posts[4].message).toBe('it-academy.by');
})
it('after deleting length should be decrement', () =>{
    //1.test data
    let action = deletePostAC(1);

    //2.action
    let newState = profileReducer(state,action);

    //3.expectation
    expect(newState.posts.length).toBe(3);
})
