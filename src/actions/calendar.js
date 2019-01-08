export const fetchMonth = (month, year) => dispatch => {
    dispatch({
        type: "FETCH_MONTH"
    });

    return fetch(`/getEvents/${year}/${month}`)
        .then(
            response => response.json(),
            error => {
                dispatch({
                    type: "FETCH_MONTH_ERROR",
                    data: error
                });
            }
        )
        .then(json => {
            dispatch({
                type: "FETCH_MONTH_SUCCESS",
                data: json.data
            });
        });
};
