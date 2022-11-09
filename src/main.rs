#[macro_use] extern crate rocket;

use rocket::fs::{FileServer, relative};

#[launch]
fn rmain() -> _ {
  rocket::build()
    .mount("/", FileServer::from(relative!("frontend/dist")))
}
