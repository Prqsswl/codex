use regex::Regex;

fn main() {
    let output = "Total output lines: 4420\n\n\ntoken token \ntoken token \ntoken token \ntoken token \ntoken token \ntoken token \nto…15367 tokens truncated…n \ntoken token \ntoken token \ntoken token \ntoken token \ntoken token \ntoken token \n";
    let regex = Regex::new(r"(?s)^Total output lines: \d+\n+(token token \n){5,}.*…\d+ tokens truncated….*(token token \n){5,}$").unwrap();
    if regex.is_match(output) {
        println!("Matched!");
    } else {
        println!("Did not match.");
    }
}
