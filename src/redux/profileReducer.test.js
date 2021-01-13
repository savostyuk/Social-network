import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
let state = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 11},
        {id: 2, message: 'It\'s my new post', likesCount: 12},
        {id: 3, message: 'BlaBla', likesCount: 5},
        {id: 4, message: 'YoYo', likesCount: 22},
    ]
}

it('length of posts should be incremented', () =>{
    //1.test data
    let action = addPostActionCreator('it-academy.by');

    //2.action
    let newState = profileReducer(state,action);

    //3.expectation
    expect(newState.posts.length).toBe(5);
})
it('message of new post should be correct', () =>{
    //1.test data
    let action = addPostActionCreator('it-academy.by');

    //2.action
    let newState = profileReducer(state,action);

    //3.expectation
    expect(newState.posts[4].message).toBe('it-academy.by');
})
it('after deleting length should be decrement', () =>{
    //1.test data
    let action = deletePost(1);

    //2.action
    let newState = profileReducer(state,action);

    //3.expectation
    expect(newState.posts.length).toBe(3);
})

/*
it(`after deleting length shouldn't be decrement if id is incorrect`, () =>{
    //1.test data
    let action = deletePost(1000);

    //2.action
    let newState = profileReducer(state,action);

    //3.expectation
    expect(newState.posts.length).toBe(3);
})*/
