extern crate rocket;
extern crate rocket_contrib;

use rocket_contrib::static_files::StaticFiles;

fn main() {
    rocket::ignite()
        .mount("/", StaticFiles::from("./static"))
        .launch();
}
