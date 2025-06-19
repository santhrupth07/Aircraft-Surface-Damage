from flask import Flask, request, send_file
from flask_cors import CORS
import os
import uuid
import cv2
from ultralytics import YOLO

app = Flask(__name__)
CORS(app)

# Load YOLOv8 model once
model = YOLO("runs/detect/train/weights/best.pt")

@app.route('/detect', methods=['POST'])
def detect():
    if 'image' not in request.files:
        return {'error': 'No image uploaded'}, 400

    file = request.files['image']
    if file.filename == '':
        return {'error': 'No selected file'}, 400

    # Save uploaded file temporarily
    temp_input_path = f"temp_{uuid.uuid4().hex}.jpg"
    # file.save(temp_input_path)

    # Run inference
    results = model(temp_input_path, save=True, project='.', name='temp_output')
    result = results[0]
    input_filename = os.path.basename(result.path)
    labeled_path = os.path.join(result.save_dir, input_filename)

    # Prepare image to send back
    response_path = f"response_{uuid.uuid4().hex}.jpg"
    os.rename(labeled_path, response_path)

    # Clean up temp folders
    try:
        os.remove(temp_input_path)
        os.rmdir(result.save_dir)
    except:
        pass  # Skip if already removed

    return send_file(response_path, mimetype='image/jpeg', as_attachment=True, download_name='result.jpg')

if __name__ == '__main__':
    app.run(debug=False)
