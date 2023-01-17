function User(props) {

    console.log(props)

    return (
        <section className="card user">
            <h2>User details:</h2>

            <p>Name: {props.name}</p>
            <p>Surname: {props.surname}</p>
            <p>Favourite Food: {props.food}</p>
            <p>Age: {props.age}</p>

        </section>
    );
}

export default User;