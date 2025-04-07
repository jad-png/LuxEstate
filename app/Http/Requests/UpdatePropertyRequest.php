<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;

class UpdatePropertyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string|max:1000',
            'price' => 'sometimes|numeric|min:0',
            'location' => 'sometimes|string|max:255',
            'bedrooms' => 'sometimes|integer|min:0',
            'area' => 'sometimes|numeric|min:0',
            'status' => 'sometimes|in:available,sold,pending',
            'admin_id' => 'sometimes|exists:users,id',
            'image_path' => 'sometimes|array',
            'image_path.*' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
            'video_path' => 'sometimes|array',
            'video_path.*' => 'sometimes|mimes:mp4,mov,avi,wmv|max:20480',
            'feature_ids' => 'sometimes|array',
            'feature_ids.*' => 'sometimes|exists:property_features,id',
        ];
    }

    protected function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $response = response()->json([
            'error' => 'Validation failed',
            'messages' => $validator->errors(),
        ], 422);

        throw new ValidationException($validator, $response);
    }
}
