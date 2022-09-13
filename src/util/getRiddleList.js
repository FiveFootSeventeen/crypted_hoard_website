export default function getRiddleList(setData) {
    fetch(
        'riddles.json',
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
