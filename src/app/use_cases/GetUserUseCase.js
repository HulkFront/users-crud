class GetUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(userId) {
        return await this.userRepository.findById(userId);
    }
}

module.exports = GetUserUseCase;
