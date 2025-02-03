import random 

subjects = ["AI", "BlockChain" , "Cloud Computing", "Data Science", "DevOps", "IoT", "Machine Learning", "Python", "R", "ReactJS"]
verbs = ["Enhancing", "Optimizing", "Implementing", "Automating", "Integrating", "Streamlining", "Building", "Developing", "Designing", "Creating"]
objects = ["Healthcare","Finance","Education","E-Commerce","Social Media","Supply Chain","Applications", "Frameworks", "Solutions", "Services", "Tools", "Libraries", "Systems", "Platforms", "Environments", "Modules"]

def generate_title():
    return f"{random.choice(verbs)} {random.choice(subjects)} {random.choice(objects)}"

if __name__ == "__main__":
    print(generate_title())