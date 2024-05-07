# Python script to write "hello" to a file

def write_hello_to_file(file_path):
    try:
        # Open the file in write mode
        with open(file_path, 'w') as file:
            # Write "hello" to the file
            file.write("Ab")
        print("Successfully wrote 'Ab' to", file_path)
    except Exception as e:
        print("Error:", e)

# Example usage
file_path = "/home/shubham/MagicMirror/modules/MMM-ProfileSwitcher/profile.txt"  # Replace this with the path to your file
write_hello_to_file(file_path)
