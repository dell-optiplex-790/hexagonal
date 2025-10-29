const state: {loaded: boolean, state: vDOM$StateObject} = {loaded: false, state: {}};

function getEmbeddedState(): {loaded: boolean, state: vDOM$StateObject} {
    return state;
}

document.addEventListener('DOMContentLoaded', () => {
    const dataElmnt = document.getElementById('data');
    if(dataElmnt) {
        state.state = JSON.parse(dataElmnt.innerHTML);
        state.loaded = true;
    }
})

export {getEmbeddedState};