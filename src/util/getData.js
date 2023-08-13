export function getRiddleList(setData) {
    fetch(
        '/riddles.json',
        {
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
    )
    .then( (response) => {
        return response.json();
    })
    .then( (riddleList) => {
        setData(riddleList)
    });
}

export function getStoryDirListing(setData) {
    fetch(
        '/xtra',
        {
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
    )
    .then( (response) => {
        return response.json();
    })
    .then( (dirListing) => {
        setData(dirListing)
    });
}

export function getStory(setData, storyHash) {
    fetch(
        `/xtra/${storyHash}.json`,
        {
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
    )
    .then( (response) => {
        return response.json();
    })
    .then( (dirListing) => {
        setData(dirListing)
    });
}

export function getWinners(setData, epoch) {
    fetch(
        `/epoch_${epoch}_winners.json`,
        {
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
    )
    .then( (response) => {
        return response.json();
    })
    .then( (dirListing) => {
        setData(dirListing)
    });
}

export function getDelegates(setData) {
    fetch(
        `http://127.0.0.1:6543/delegates`
    )
    .then( (response) => {
        return response.json();
    })
    .then( (delegates) => {
        setData(delegates)
    });
}