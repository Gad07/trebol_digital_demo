import os

replacements = {
    '#5C9E31': '#5C9E43',
    '#5c9e31': '#5c9e43',
    '#1C1D1F': '#2D2E2D',
    '#1c1d1f': '#2d2e2d',
    '#82C836': '#8DC63F',
    '#82c836': '#8dc63f',
    '#499529': '#5C9E43',
    '#499529': '#5c9e43',
}

target_dirs = ['components', 'app']

for t_dir in target_dirs:
    for root, dirs, files in os.walk(t_dir):
        for file in files:
            if file.endswith('.js') or file.endswith('.jsx') or file.endswith('.css'):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                except UnicodeDecodeError:
                    try:
                        with open(filepath, 'r', encoding='latin-1') as f:
                            content = f.read()
                    except Exception as e:
                        print(f"Skipping {filepath} due to error: {e}")
                        continue
                
                new_content = content
                replaced = False
                for old, new in replacements.items():
                    if old in new_content:
                        new_content = new_content.replace(old, new)
                        replaced = True
                
                if replaced:
                    print(f"Replacing colors in: {filepath}")
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
