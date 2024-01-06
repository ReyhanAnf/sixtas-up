
export default async function getDataPost(){
  const baseUrl = 'http://127.0.0.1:8000/api/';
  const res_post = await fetch(`${baseUrl}posts`, { cache: 'no-store' });
  const res_answer = await fetch(`${baseUrl}answers`, { cache: 'no-store' });
  const res_reply = await fetch(`${baseUrl}replies`, { cache: 'no-store' });

  const complited_post: any[] = []

  const data_post = await res_post.json()
  const data_answer = await res_answer.json()
  const data_reply = await res_reply.json()

  data_post.map((post)=>{
    const setAnswer: any[] = [];

    data_answer.map((answer)=>{
      const setReply: any[] = [];

      if (answer.post == post.post_id) {
        data_reply.map((reply) => {

          if (reply.answer == answer.answer_id) {
            setReply.push(reply);
          }
          
        })
        setAnswer.push(answer)
      }
      answer.reply = setReply;
    })
    post.answer = setAnswer;
    complited_post.push(post)
  })

  return complited_post;
    // ##################################### Bagian Posts #################################
  
      
      
  //     for field in post._meta.get_fields():
  //       post_dict[field.name] = post.__dict__.get(field.name)
      
  //     // ###################################### Bagian Answer #################################
      
  //     answers =  Answers.objects.filter(post_id=post_dict['post_id'])
  //     answers_list = []
  //     for answer in answers:
  //       answer_dict = {}
  //       for field in answer._meta.get_fields():
  //         answer_dict[field.name] = answer.__dict__.get(field.name)
          
  //       answer_dict["user_answer"] = get_data_user_person(answer_dict["answerer_id"])[0]
  //       answers_list.append(answer_dict)
        
  //       // ####################################### Bagian reply ########################################
        
  //       replies = Replies.objects.filter(answer_id=answer_dict['answer_id'])
  //       reply_list = []
  //       for reply in replies:
  //         reply_dict = {}
  //         for field in reply._meta.get_fields():
  //           reply_dict[field.name] = reply.__dict__.get(field.name)
          
  //         reply_dict["user_reply"] = get_data_user_person(reply_dict["replier_id"])[0]
  //         reply_list.append(reply_dict)
          
  //         // ##################################### Akhir Reply  #################################
        
  //       answer_dict["replies"] = reply_list
  //       answer_dict["count"] = len(reply_list)
  //       answer_dict["vote"] = answer_dict["up"] - answer_dict["down"]
        
  //     post_dict["answers"] = answers_list
  //     post_dict["user_author"] = get_data_user_person(post_dict["author_id"])[0]


  //     post_dict["count"] = len(answers_list)
      
  //     all_content.append(post_dict)
    
  //   return all_content
  
  // elif type(users) != type('string'):
  //   print(type(users))
  //   auth_user = users.user.username
  //   posts = Posts.objects.filter(author_id=auth_user)
    
  //   auth_content = []
  //   // ##################################### Bagian Posts #################################
  //   for post in posts:
      
  //     post_dict = {}
  //     for field in post._meta.get_fields():
  //       post_dict[field.name] = post.__dict__.get(field.name)
      
  //     // ###################################### Bagian Answer #################################
      
  //     answers =  Answers.objects.filter(post_id=post_dict['post_id'])
  //     answers_list = []
  //     for answer in answers:
  //       answer_dict = {}
  //       for field in answer._meta.get_fields():
  //         answer_dict[field.name] = answer.__dict__.get(field.name)
          
  //       answer_dict["user_answer"] = get_data_user_person(answer_dict["answerer_id"])[0]
  //       answers_list.append(answer_dict)
        
  //       // ####################################### Bagian reply ########################################
        
  //       replies = Replies.objects.filter(answer_id=answer_dict['answer_id'])
  //       reply_list = []
  //       for reply in replies:
  //         reply_dict = {}
  //         for field in reply._meta.get_fields():
  //           reply_dict[field.name] = reply.__dict__.get(field.name)
          
  //         reply_dict["user_reply"] = get_data_user_person(reply_dict["replier_id"])[0]
  //         reply_list.append(reply_dict)
          
  //         // ##################################### Akhir Reply  #################################
        
  //       answer_dict["replies"] = reply_list
  //       answer_dict["count"] = len(reply_list)
  //       answer_dict["vote"] = answer_dict.up - answer_dict.down
        
        
  //     post_dict["answers"] = answers_list
  //     post_dict["user_author"] = get_data_user_person(post_dict["author_id"])[0]

  //     post_dict["count"] = len(answers_list)
      
  //     auth_content.append(post_dict)
    
  //   return auth_content
  
  // else:
  //   onepost = users
  //   posts = Posts.objects.filter(post_id=onepost)
    
  //   onepost = []
  //   // ##################################### Bagian Posts #################################
  //   for post in posts:
      
  //     post_dict = {}
  //     for field in post._meta.get_fields():
  //       post_dict[field.name] = post.__dict__.get(field.name)
      
  //     // ###################################### Bagian Answer #################################
      
  //     answers =  Answers.objects.filter(post_id=post_dict['post_id'])
  //     answers_list = []
  //     for answer in answers:
  //       answer_dict = {}
  //       for field in answer._meta.get_fields():
  //         answer_dict[field.name] = answer.__dict__.get(field.name)
          
  //       answer_dict["user_answer"] = get_data_user_person(answer_dict["answerer_id"])[0]
  //       answers_list.append(answer_dict)
        
  //       // ####################################### Bagian reply ########################################
        
  //       replies = Replies.objects.filter(answer_id=answer_dict['answer_id'])
  //       reply_list = []
  //       for reply in replies:
  //         reply_dict = {}
  //         for field in reply._meta.get_fields():
  //           reply_dict[field.name] = reply.__dict__.get(field.name)
          
  //         reply_dict["user_reply"] = get_data_user_person(reply_dict["replier_id"])[0]
  //         reply_list.append(reply_dict)
          
  //         // ##################################### Akhir Reply  #################################
        
  //       answer_dict["replies"] = reply_list
  //       answer_dict["count"] = len(reply_list)
  //       answer_dict["vote"] = answer_dict.up - answer_dict.down 
        
  //     post_dict["answers"] = answers_list
  //     post_dict["user_author"] = get_data_user_person(post_dict["author_id"])[0]
      
  //     post_dict["count"] = len(answers_list)

  //     onepost.append(post_dict)
    
  //   return onepost
}
