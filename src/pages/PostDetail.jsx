import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../assets/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm primary'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem repellat quibusdam, veritatis enim voluptatum eius non, amet accusamus perferendis magnam accusantium reiciendis inventore esse repellendus nam aperiam excepturi aut illo eum. Est, pariatur cumque? Veritatis nostrum accusamus accusantium eum reprehenderit.</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt harum exercitationem, blanditiis ad sint voluptatum repellat. Inventore, corporis iusto molestiae porro vel similique nemo pariatur quibusdam, vero delectus est. Magnam ratione labore totam culpa accusamus quibusdam tenetur cumque debitis reiciendis quidem blanditiis incidunt, repellendus tempore earum rem consectetur temporibus ut.
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut adipisci porro ut tempora reprehenderit tempore quidem asperiores nobis, voluptatibus quod mollitia voluptatum ipsam similique neque sunt quisquam vitae sit ducimus consequatur voluptate eum consequuntur? Asperiores velit in adipisci commodi nihil tempora error, beatae reiciendis mollitia maxime esse nemo, exercitationem, laudantium eveniet dolorem itaque consequatur! Dolorem in inventore voluptatem, laboriosam pariatur incidunt ullam molestiae earum maxime voluptates, quas aut obcaecati expedita neque, cum deleniti dignissimos nisi sunt. Quis nam adipisci consequatur consectetur iure. Dolorum consectetur saepe quam, nesciunt nostrum sit. Quo corrupti tempore doloremque vitae? Dolorem quidem nulla iusto, a sequi odio eveniet facilis officiis laboriosam omnis, quia accusantium harum quasi dolorum.
        </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas sed ad voluptate sequi eveniet aliquid minus illum necessitatibus placeat beatae.
      </p>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nobis unde corrupti rem fuga, sequi a adipisci reiciendis quos culpa eveniet itaque repellendus eos ad! Autem rem veritatis error sunt! Dolorum sint odio consequatur! Quas cupiditate, unde nesciunt est hic aperiam accusamus vero explicabo, veritatis illo numquam tenetur at distinctio voluptatibus fugit. Tempora omnis impedit laboriosam quae fuga modi repellat, nam veniam vero? Doloribus cupiditate eligendi rem. Dicta, asperiores ipsum! Officia libero commodi, adipisci quo quia dolor, distinctio eligendi eos culpa exercitationem nobis ab nihil saepe, totam repellat unde corporis quisquam. Eaque, vel ut at eveniet provident maxime quaerat eligendi ab pariatur voluptate! Assumenda molestias sunt odio dolore nam quod laudantium quibusdam repellat quasi voluptatem itaque nemo optio, sequi similique saepe, quisquam nostrum quae? Dicta quis quam non corporis atque labore nam nobis dolorem sunt laudantium qui minus eius et odit ipsa ullam, eligendi eaque, corrupti tempora! Sunt quasi eligendi voluptates, distinctio corrupti vero. Sapiente soluta dolore porro consectetur aliquam modi ducimus maiores, unde sit ad odit, adipisci a voluptates ipsam nihil libero nisi molestiae laborum totam sed corporis? Numquam fugit facere consectetur error? Magni placeat a cupiditate voluptatibus, ratione numquam nisi accusantium culpa. Deleniti modi voluptas quas totam nam?
      </p>
      </div>
    </section>
  )
}

export default PostDetail
