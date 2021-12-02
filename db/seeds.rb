

puts "users!"



 ben = User.create(
name: "Ben Darago",
slug: "ben-darago",
role: "Owner and creator of app, works for cats",
username: "BenDMaryland",
email: "ben.d.maryland@gmail.com",

 )

 petunia = User.create(
name: "Petunia",
slug: "petunia",
role: "Meow!",
username: "Petunia@rose-agile.com",
email: "ben.d.maryland@rose-agile.com",
 )


puts "sprints"

 database_bones = Sprint.create(
    progress: 0,
    urgency: 1,
    priority: 3,
    sprint_title: "Set up the foundation for the database",
    sprint_data: " Data base should have models and stuff",
    slug: "temp",
    goal_date: "2021-11-29 21:56:34.364715000 +0000",
    completed_comment: " Not really completed",
    created_by_id: ben.id,
    completed_by_id: petunia.id,
    completed_at: "2022-11-29 21:56:34.364715000 +0000",
    completed: true

 )

 puts "features/bugs/comments"


Feature.create(
    progress: 30,
    urgency: 1,
    priority: 3,
    feature_title: "Set up model relationships",
    feature_data: "Set up all relationships. see google sheets doc ",
   sprint_id: database_bones.id,
    slug: "temp",
    completed_comment: " Not really completed",
    created_by_id: ben.id,
    completed_by_id: petunia.id,
    completed_at: "2022-11-29 21:56:34.364715000 +0000",
    completed: true

 )
 
  Bug.create(
    progress: 30,
    urgency: 1,
    priority: 3,
    bug_title: "Yeah no data",
    bug_data: "No data at all make a seed file",
   sprint_id: database_bones.id,
    slug: "temp",
    completed_comment: " Not really completed",
    created_by_id: ben.id,
    completed_by_id: petunia.id,
    completed_at: "2022-11-29 21:56:34.364715000 +0000",
    completed: true

 )

 Comment.create(
    progress: 30,
    urgency: 1,
    priority: 3,
    comment_details: "Added the data for the seed file",
   sprint_id: database_bones.id,
    slug: "temp",
    completed_comment: " Not really completed",
    created_by_id: petunia.id,
    completed_by_id: petunia.id,
    completed_at: "2022-11-29 21:56:34.364715000 +0000",
    completed: true

 )
 puts "done"