const User = require('../../domain/entities/User');

class UpdateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(userDto) {
        if (!userDto.id) {
            throw new Error('ID do usuário é necessário');
        }

        const user = new User(userDto.id, userDto.name, userDto.email);
        if (!user.isValid()) {
            throw new Error('Usuário inválido');
        }

        return await this.userRepository.update(user);
    }
}

module.exports = UpdateUserUseCase;
