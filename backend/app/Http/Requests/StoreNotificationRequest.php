<?php

namespace App\Http\Requests;

use Dotenv\Exception\ValidationException;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreNotificationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // return true;
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'required|integer|exists:users,id',
            'type' => 'required|string|in:ContactAccepted,AppointmentScheduled,NewPropertyPosted',
            'data' => 'nullable|array',
        ];
    }

    public function messages()
    {
        return [
            'user_id.required' => 'The recipient user ID is required.',
            'user_id.integer' => 'The user ID must be an integer.',
            'user_id.exists' => 'The specified user does not exist.',
            'type.required' => 'The notification type is required.',
            'type.in' => 'The type must be one of: ContactAccepted, AppointmentScheduled, NewPropertyPosted.',
        ];
    }

    protected function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $response = response()->json([
            'error' => 'Validation failed',
            'messages' => $validator->errors(),
        ], 422);

        throw new \Illuminate\Validation\ValidationException($validator, $response);
    }
}
