<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class CreatePropertyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->isAdmin();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "title" => 'required|string|max:255',
            "description" => 'required|string|max:1000',
            "price" => 'required|numeric|min:0',
            "location" => 'required|string|max:255',
            "bedrooms" => 'required|integer|min:0',
            "area" => 'required|numeric|min:0',
            "status" => 'required|in:available,sold,pending',
            "admin_id" => 'required|exists:users,id',
            "image_path" => 'nullable|array',
            "image_path.*" => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            "video_path" => 'nullable|array',
            "video_path.*" => 'nullable|mimes:mp4,mov,avi,wmv|max:20480',
            "feature_ids" => 'nullable|array',
            "feature_ids.*" => 'nullable|exists:property_features,id',
            "category_id" => "required|exists:categories,id"
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
