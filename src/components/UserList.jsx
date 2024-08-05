export const UserList =({dataList}) =>{
    return(
        <div className="row">
            {dataList?.map((user) =>
(

<UserCard key
=
{user
.id
} user
=
{user
} />
            ))}




        </div>
    )
}
function UserCard({user}){
    const { name, email, phone}=user

    return(
        <div className="col 3">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p >{email}</p>
                    <h5>{phone}</h5>

                </div>
            </div>
        </div>
    )
}
